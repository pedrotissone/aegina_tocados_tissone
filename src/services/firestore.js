// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore" //importo las funciones necesarias de Firebase para trabajar con firestore

const firebaseConfig = {
  apiKey: "AIzaSyAvMnEqG5EDp4qUNwfWbXJAnkZy8UVz1Nc",
  authDomain: "reactcoder-2d3f8.firebaseapp.com",
  projectId: "reactcoder-2d3f8",
  storageBucket: "reactcoder-2d3f8.appspot.com",
  messagingSenderId: "1061841607513",
  appId: "1:1061841607513:web:159805b5aaa63d48a44a48"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

//  export default function testDatabase(){
//     console.log(app)
// }

//1 Traer todos los documentos
export default async function getItems(){
//1A Referenciamos nuestra Collection
const colectionProductsRef = collection(DB, "products");
//1B Solicitamos todos los documentos de la collection
const documentSnapShot = await getDocs(colectionProductsRef);//Necesito extraer la data de este array de documentos
console.log(documentSnapShot.docs[0].data())

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