import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 9;
  useEffect(() => {
    fetch(
      `https://safe-peak-05375.herokuapp.com/services?size=${size}&&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        const totalData = data.count;
        const pages = Math.ceil(totalData / size);
        setTotalPage(pages);
      });
  }, [currentPage]);
  return { services, setServices, totalPage, currentPage, setCurrentPage };
};

export default useServices;
