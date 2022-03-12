import { Formik } from "formik";
import { Button, Card, CardContent } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import "./signup.css";
import app_config from "../config";
import Swal from "sweetalert2";

const Signup = () => {
  const url = app_config.api_url;

  // Two important thing to use with Formik
  // 1. formObject
  const imageForm = {
    title: "",
    discription: "",
    author: "",
    file: "",
  };

  // 2. submit callback function
  const imageSubmit = (formdata) => {
    console.log(formdata);


    const uploadFile = (e) => {
        let file = e.target.files[0];
        setFile(file.name)
        let formdata = new FormData();
        formdata.append('file', file);
    
        fetch(url + '/util/uploadfile', { method: 'POST', body: formdata })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
      }
    
                

    // three things are required to request
    // 1. address
    // 2. http request method
    // 3. data and its format

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/image/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "image added sucessfully!",
        });
      });
  };

  return (
    <div className="image-bg">
      <h1 className="text-center">upload image Here</h1>
      <hr />
      <div className="col-md-4 mx-auto">
        <Card>
          <CardContent>
            <Formik initialValues={imageForm} onSubmit={imageSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-3">Email</label>
                  <input
                    placeholder="title"
                    className="form-control"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                  />

                  <label className="mt-3">Username</label>
                  <input
                    placeholder="description"
                    className="form-control"
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                  />

                  <label>upload file</label>
                  <input
                  type = "file" onChange={uploadFile}/>
                        <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    color="secondary"
                    startIcon={<GoogleIcon />}
                  >
                    Register to Continue
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
