import styled from "styled-components";

 export const Background=styled.div`
        background-color: #63379A;
        color: white;
        padding-top:2em;
       
    
 `
 export const TextAlign=styled.p`
   font-size: 1em;
   line-height: 210%;
   padding-left: 1em;
   text-align:left;
   
   @media (max-width: 576px) {
     text-align:center;
   }
                
 `
 export const Icons=styled.div`
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
 `
export const PartnerStyle=styled.div`
  display:flex;
  height: 100%;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
  
` 
export const FooterEnd=styled.div`
background:#421F6D;
text-align:center;
margin-top:0.5rem;
padding-top:0.5rem;
padding-bottom:0.5rem;
`