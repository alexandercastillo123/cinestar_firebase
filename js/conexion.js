import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBr0dGpfS9MoGH2gfwmlxesGEeqqCJc6S8",
    authDomain: "alexander-pc-cinestar.firebaseapp.com",
    projectId: "alexander-pc-cinestar",
    storageBucket: "alexander-pc-cinestar.firebasestorage.app",
    messagingSenderId: "170287258190",
    appId: "1:170287258190:web:eb042a6e69572096b0c11f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener todos los cines para la sección "Cines"
const getCines = async () => {
    const q = query(collection(db, 'cines'), orderBy('id'));
    return await getDocs(q);
};

// Obtener el detalle de un cine por su ID
const getCine = async (id) => {
    const q = query(collection(db, 'cines'), where('id', '==', id.toString()));
    const data = await getDocs(q);
    let cine = null;
    data.forEach(doc => {
        cine = doc.data();
    });
    return cine;
}


// Obtener películas filtradas por estado (Cartelera o Estrenos)
const getPeliculas = async (id) => {
    const q = query(
        collection(db, 'peliculas'),
        where('idEstado', '==', id.toString())
    );
    return await getDocs(q);
};

// Obtener el detalle de una película específica por su ID
const getPelicula = async (id) => {
    const q = query(collection(db, 'peliculas'), where('id', '==', id.toString()));
    const data = await getDocs(q);

    let pelicula = null;
    data.forEach(doc => {
        pelicula = doc.data();
    });
    return pelicula;
}

export { getCines, getCine, getPeliculas, getPelicula };
