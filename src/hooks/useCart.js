import { useEffect, useState } from "react";
import useFirebase from "./useFirebase.js";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [selectedService, setSelectedService] = useState([]);

  useEffect(() => {
    fetch(`https://safe-peak-05375.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectedService(data);
        }
      });
  }, [uid]);

  function addToCart(service) {
    const isHave = selectedService.find(
      (selected) => selected._id === service._id
    );
    delete service._id;
    service.uid = uid;
    service.status = "pending";

    if (isHave) {
      alert("Service has been selected!");
    } else {
      fetch("https://safe-peak-05375.herokuapp.com/service/add", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(service),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelection = [...selectedService, service];
            setSelectedService(newSelection);
          }
        });
    }
  }

  function remove(id) {
    fetch(`https://safe-peak-05375.herokuapp.com/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const selectAfterRemove = selectedService.filter(
            (service) => service._id !== id
          );
          setSelectedService(selectAfterRemove);
        } else {
          alert("something went wrong!!");
        }
      });
  }

  return { setSelectedService, remove, addToCart, selectedService };
};

export default useCart;
