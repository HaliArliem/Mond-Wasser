import React from 'react';
import { useNavigate } from "react-router-dom";

function AboutMe (){
let navigate = useNavigate();
return (
<div style={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
<button onClick={() => {navigate("/");}} style={{backgroundColor: 'white', color: 'black'}}>Go Home</button>
<h2>About the Admin</h2>

<p>:Odysee: sdfsdf </p>
<p>gab: sdfsdfsdf</p>
<p>Minds: sdfsdfsdf</p>
<p>Chess.com: sdfsdfsdf</p>
<p>Pixelfed: Jfsdfsdfsdf</p>
<p>Mastodon: John Doe</p>
<p>Email: sdgnsdfshali_Arliem53</p>
<p>Alamy: what am i going to post? - sunsets, sunrises, storms, ligtning, wind, grass, forest, rain</p>
<p>GitHub: sosjdfosjodgfjdog</p>
<p>HackerNews: sosjdfosjodgfjdog</p>
<p>Pleroma: fsdkpfgksdgf</p>
<p>online-go.com: fsdkpfgksdgf</p>
<p>Spotify alternative.com: fsdkpfgksdgf</p>
<p>Languages I'm studying altefsdfsdff</p>
<p>xcvmxvmofm I'm studying wakanda</p>

</div>
);
}

export default AboutMe;
