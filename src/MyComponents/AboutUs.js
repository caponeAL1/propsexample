import{useState} from "react";
function AboutUs(props){
 props.companyName="Gavs Ltd"; 

    const [companyName, setCompanyName]=useState(props.companyName);
    const[address, setAddress]=useState(props.address);

    return(<center><div>
           <b>Contact us @</b> {companyName}<br/>
           <b> Our address</b> {address}<br/>
      </div></center>)
}
export default AboutUs;