import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebase/config";

const error = ref(null);

const SignIn = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not login user");
    }
    return res;
  } catch (err) {
    error.value = err.message;
  }
};
const useSignIn = () => {
  return { error, SignIn };
};

export default useSignIn;