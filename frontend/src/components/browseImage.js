import { Card , Grid } from "@mui/material"
import { useState,useEffect } from "react";

    const BrowseImage = () => {
        const [imageList, setImageList] = useState([]);
            const [loading, setLoading] = useState(true);

        const fetchImageData = () => {
            fetch(url + "/Image/getall"  )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setImageList(data);
                setLoading(false);
              });
          };
          const showImage = () => {
            if (!loading) {
              return imageList.map((Image, index) => (
                <Card>
                  <Grid container>
                  <Grid item md={4}>
        
                    </Grid>
                    <Grid item md={8}>
                      
                      <p>{Image.description}</p>
                      <p>{Image.title}</p>
                      <p>{Image.author}</p>
                      <p>{Image.file}</p>
                      
                    
        
                    </Grid>
                  </Grid>
                </Card>
              ));
            } else {
              return <h2>Loading ...</h2>;
            }
          };
        
          
          useEffect(() => {
            fetchImageData();
          }, []);
        
         
        
        
    return(
       <div className="container">
           
           <h1>Manage Image User</h1>
      <hr />
      {showImage()}
       </div>
    )
}
 export default BrowseImage;