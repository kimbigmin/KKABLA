import { flexbox, height } from "@mui/system";

export default function Banner(){
  return(
    <div
      style={{
        position:"flex",
        justifyContent:"center",
        alignItems:"center",
        width: "100%",
        height: "69vh",
        overflow: "hidden",
    }}
    >
      <video
        style={{
          width: "100%",
        }}
        autoPlay muted loop
      >
        <source src={require("../../../videos/kkablaBanner.mp4")} type="video/mp4"/>
        왜안나오니?
      </video>
    </div>  
  );

}