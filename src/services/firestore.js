// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy, limit, documentId, setDoc, updateDoc } from "firebase/firestore" //importo las funciones necesarias de Firebase para trabajar con firestore
import { getStorage, ref } from "firebase/storage"
import md5 from "md5";

const firebaseConfig = {
  apiKey: "AIzaSyAvMnEqG5EDp4qUNwfWbXJAnkZy8UVz1Nc",
  authDomain: "reactcoder-2d3f8.firebaseapp.com",
  projectId: "reactcoder-2d3f8",
  storageBucket: "reactcoder-2d3f8.appspot.com",
  messagingSenderId: "1061841607513",
  appId: "1:1061841607513:web:159805b5aaa63d48a44a48"
};

export const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app)

//  export default function testDatabase(){
//     console.log(app)
// }

//1 Traer todos los documentos
export async function getItems(){
//1A Referenciamos nuestra Collection
const colectionProductsRef = collection(DB, "products");
//1B Solicitamos todos los documentos de la collection
const documentSnapShot = await getDocs(colectionProductsRef);//Necesito extraer la data de este array de documentos
// console.log(documentSnapShot.docs[0].data())

const documentsData = documentSnapShot.docs.map((doc =>{
    // let docDataWithId = doc.data() //Agrego el id del documento al objeto
    // docDataWithId.id = doc.id
    // return docDataWithId;
    return {
        ...doc.data(), //Sugar Syntax del codigo de arriba
        id: doc.id
    }
}))

return documentsData;

}

//    ESTA FUNCION YA NO LA USO PORQUE ERA UN QUILOMBO MANEJAR LOS INDEX CUANDO EMPEZAS A BORRAR DOCUMENTOS, ASIQUE LOS TRAIGO POR LA INDEXACION QUE HACE FIRESTORE

export async function getItemsOrdered(){   
    const colectionProductsRef = collection(DB, "products");
    const q = query(colectionProductsRef, orderBy("index"), limit(20))
 
    const documentSnapShot = await getDocs(q);
    // console.log(documentSnapShot.docs[0].data())
    
    const documentsData = documentSnapShot.docs.map((doc =>{
       
        return {
            ...doc.data(),
            id: doc.id
        }
    }))
    
    return documentsData;
    
    }

export async function getSingleProduct(idParams){
    const docRef = doc(DB, "products", idParams) //Le paso base de datos, la coleccion y el id que tengo ya del useParams

    const docSnapshot = await getDoc(docRef)

    return {
        ...docSnapshot.data(),
        id: docSnapshot.id
    }
}

export async function getItemsByCategory(categoryParams){

    const collectionRef = collection(DB, "products");

    const queryCat = query(collectionRef, where("category", "==", categoryParams))

    const documentSnapShot = await getDocs(queryCat);//Necesito extraer la data de este array de documentos
    
    const documentsData = documentSnapShot.docs.map((doc =>{
    // let docDataWithId = doc.data() //Agrego el id del documento al objeto
    // docDataWithId.id = doc.id
    // return docDataWithId;
    return {
        ...doc.data(), //Sugar Syntax del codigo de arriba
        id: doc.id
    }
}))

return documentsData;
    
}

export async function createOrder(order){
    const collectionRef = collection(DB, "orders")
    const docOrder = await addDoc(collectionRef, order)
    
    return(docOrder.id);

}

//CREAR DOCUMENTO CON ID DE FIRESTORE USANDO SETDOC 

// export  async function createDoc() {    
//  const collectionRef = collection(DB, "products")
//  await setDoc(doc(collectionRef), {
//     key1: "ME CREARON"
//  })    
// }

//ACTUALIZAR DOCUMENTO CON UPDATEDOC (SI LA KEY EXISTE TE MODIFICA EL VALOR Y SINO TE CREA NUEVA KEY)

export  async function createDoc(titleparam, descriptionParam, priceParam, imgParam, id) {    
    const collectionRef = doc(DB, "products", id)
    await updateDoc(collectionRef, {
        img: imgParam,
        title: titleparam,
        description: descriptionParam,
        price: priceParam
    })
   }

//PROBANDO AUTENTICACIÓN CON MD5 Y FIREBASE (NO SIRVE PARA USAR CON AUTH)
   export async function comprobarUsuario(user, password) {
    const docRef = doc(DB, "admin", "RpOiTVgLKKEQjJHQxqd1")
    const documentSnapshot = await getDoc(docRef)
    // console.log(documentSnapshot.data().user)
    // console.log(documentSnapshot.data().password)
    if (documentSnapshot.data().user == md5(user) && documentSnapshot.data().password == md5(password)) {
        console.log("bien te logeaste")
    } else {
        console.log("No se encuentra autorizado")
    }
   }

//                                                      FUNCION PARA CARGAR TUS PRODUCTOS A FIRESTORE SOLO SE USA UNA VEZ

// export async function exportArrayToFirestore(){
//     const products =[
//         {
//             id: 1,
//             title: "Corona de flores",
//             price: 3500,
//             stock: 10,
//             category: "Flores preservadas",
//             img: "/img/img1.png",
//             description: "Corona de flores de 35 cm en tonos azulados",
//             discount: "20%"
//         },
//         {
//             id: 2,
//             title: "Corona de piedras",
//             price: 18000,
//             stock: 3,
//             category: "Piedras",
//             img: "/img/img2.png",
//             description: "Corona de piedras de 35 cm de largo",
//             discount: "30%"
//         },
//         {
//             id: 3,
//             title: "Tocado lateral",
//             price: 3500,
//             stock: 5,
//             category: "Porcelana fria",
//             img: "/img/img3.png",
//             description: "Tocado lateral de porcelana satinada de 15 cm"
//         },
//         {
//             id: 4,
//             title: "Boutoniere",
//             price: 1500,
//             stock: 20,
//             category: "Flores preservadas",
//             img: "/img/img1.png",
//             description: "Boutoniere de eucaliptus y statis de 6cm"
//         },
//         {
//             id: 5,
//             title: "Guia",
//             price: 3000,
//             stock: 3,
//             category: "Piedras",
//             img: "/img/img2.png",
//             description: "Guia de piedra de 50cm"
//         },
//         {
//             id: 6,
//             title: "Tocado lateral",
//             price: 2500,
//             stock: 5,
//             category: "Porcelana fria",
//             img: "/img/img3.png",
//             description: "Tocado lateral de porcelana satinada de 8 cm"
//         },
//         {
//             id: 7,
//             title: "Tocado de flores",
//             price: 2500,
//             stock: 10,
//             category: "Flores preservadas",
//             img: "/img/img1.png",
//             description: "Tocado de flores de 13 cm"
//         },
//         {
//             id: 8,
//             title: "Tocado de piedras",
//             price: 5000,
//             stock: 3,
//             category: "Piedras",
//             img: "/img/img2.png",
//             description: "Tocado de piedras de 18 cm de largo"
//         },
//         {
//             id: 9,
//             title: "Tocado de porcelana",
//             price: 2500,
//             stock: 5,
//             category: "Porcelana fria",
//             img: "/img/img3.png",
//             description: "Tocado de porcelana satinada de 8 cm"
//         },
            
//         ]
//     const collectionRef = collection(DB, "products")
//     for (let item of products) { //El for of es mejor que el forEach para tareas asincronas
//         item.index = item.id //Borro el id que me trae de mis productos porque conviene usar el que te da firestore, pero lo aprovecho como un index para ordenar mis productos, sino me pueden aparecer todos desordenados!
//         delete(item.id)
//         let docOrder = await addDoc(collectionRef, item)
//         console.log("documento creado, id: ", docOrder.id)        
//     }
// }