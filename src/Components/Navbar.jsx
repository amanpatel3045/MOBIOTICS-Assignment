import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  // const [logout, setLogout] = useState(true);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer null`;
    navigate("/");
    
  };
  return (
    <HStack
      justifyContent={"center"}
      alignItems="center"
      gap={"20px"}
      fontSize="lg"
      color={"white"}
      height="70px"
      bgColor={"teal.500"}
      fontWeight="500"
    >
      <Link to={"/"}>
        <Heading color={"crimson.200"}>Mobiotics</Heading>
      </Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to="/userlist">User List</Link>
      {axios.defaults.headers.common["Authorization"].split(" ")[1]!=="null"&&
        <Text _hover={{ cursor: "pointer" }} onClick={logoutHandler}>
          Logout
        </Text>
      }
      
    </HStack>
  );
}

export default Navbar;
