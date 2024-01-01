import { ref } from "vue"
import { db } from "@/firebase/config";
import { collection,addDoc} from "firebase/firestore";

const useCollection = (collectionData) => {
    let error = ref(null);
    let collectionRef = collection(db,collectionData);
    let addDocument = async(doc) => {
        try{
           let res =  await addDoc(collectionRef,doc);
           console.log(res);
        }catch(err){  
            console.log(err.message);
            error.value = "could not send message..."
        }
    }
    return {error,addDocument}
}

export default useCollection;