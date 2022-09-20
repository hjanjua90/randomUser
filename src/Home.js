import React, { useEffect } from "react";
import axios from "axios";
import Users from "./components/Users";
import { useGlobalContext } from "./Context";
const Home = () => {
  // eslint-disable-next-line
    const { setusersData } = useGlobalContext();

    const url = "https://randomuser.me/api/?results=40";
    useEffect(() => {
        const fetchUsers = async () => {
        axios.get(url).then((res) => {
            setusersData(res.data.results);
            console.log(res.data.results);
        });
        };
        fetchUsers();
        // eslint-disable-next-line
    }, []);
    return (
        <>
        <h4>Users List</h4>
            <Users />
        </>
    );
};

export default Home;
