import { Alert, Button, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import app_config from "../config";
import UpdateForm from "./updateform";

const ManageUsers = () => {
  const url = app_config.api_url;

  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const [snakbarOpen, setSnakbarOpen] = useState(false);
  const fetchImageData = () => {
    fetch(url + "/image/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsersList(data);
        setLoading(false);
      });
  };

  export default ManageUsers;
