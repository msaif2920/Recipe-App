import firestore from "./firebase.js";

const fetchData = async (collection) => {
  const data = [];
  await firestore
    .collection(collection)
    .get()
    .then((query) => {
      query.forEach((doc) => {
        const temp = doc.data();
        temp.label = doc.id;
        data.push(temp);
      });
    });
  return data;
};

export default fetchData;
