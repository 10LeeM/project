import React, { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { sendReq } from "../../api/api";
import { getUserProfile } from "../../store/slices/userSlice";

const Vitals = () => {
  const user = useSelector(getUserProfile);
  const endpoints = useMemo(
    () => [`blood-pressures`, `body-temperatures`, `pulse-rates`],
    []
  );
  // const endpoints =
  const [index, setIndex] = useState(0);

  const fetchVitals = useCallback(async () => {
    return await sendReq({
      endpoint: `/patients/${user?.id}/${endpoints[index]}`,
      method: "GET",
      auth: true,
    });
  }, [endpoints, index, user?.id]);

  useQuery(
    `Get patients vitals at ${index} and end point ${endpoints[index]}`,
    async () => {
      return await fetchVitals();
    },
    {
      onSuccess(data) {
        if (index < endpoints.length - 1) {
          setIndex(index + 1);
        }
        console.log(data);
      },
      onError(err) {
        console.log(err);
        if (index < endpoints.length - 1) {
          setIndex(index + 1);
        }
      },
      retry: false,
    }
  );
  return <div></div>;
};

export default Vitals;
