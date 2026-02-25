import React from "react";

export default function Photos(props) {
if (props.photos) {
return (

<section className="Photos">
<div className="row">
{props.photos.map(function (photo, index) {
return (
<div className="col-4" key={index}>
<img src={photo.src.landscape} className="img-fluid" alt={photo.alt} style={{ borderRadius: "8px", marginBottom: "10px", width: "100%" }} />
</div>
);
})}
</div>
</section>
);
} else {
return null;
}
}