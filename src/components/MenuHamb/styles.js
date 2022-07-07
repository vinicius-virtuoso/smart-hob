import styled from "styled-components";



export const Div = styled.div`
z-index: 5;
input{
  display: none;
}

#active:checked ~ .wrapper{  
  right:0;
}
.menu-btn{
  position: absolute;
  z-index: 2;
  right: 20px;  
  top: 20px;
  height: 50px;
  width: 50px;
  text-align: center;
  /* line-height: 50px; */
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;  
  transition: all 0.3s ease-in-out;
}
.menu-btn span,
.menu-btn:before,
.menu-btn:after{
	content: "";
	position: absolute;
	top: calc(20% - 1px);
	left: 30%;
	width: 40%;
	border-bottom: 2px solid #000;
	transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.menu-btn:before{
  transform: translateY(-8px);
}
.menu-btn:after{
  transform: translateY(8px);
}

.close {
	z-index: 999;
	width: 100%;
	height: 100%;
	pointer-events: none;
	transition:  .6s;
}

#active:checked + .menu-btn span {
	transform: scaleX(0);
}
#active:checked + .menu-btn:before {
	transform: rotate(45deg);
  border-color: #fff;
}
#active:checked + .menu-btn:after {
	transform: rotate(-45deg);
  border-color: var(--color-light);
}

#active:checked ~ .wrapper ul li button{
  opacity: 1;
}

#active:checked ~ .wrapper ul li button{
	transform: none;
	transition-timing-function: ease, cubic-bezier(.1,1.3,.3,1);
   transition-delay: .6s;
  transform: translateX(-100px);
  
}

`
export const Menu = styled.div`
position: fixed;
  top: 0;  
  right: -100%;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  transition: all 0.6s ease-in-out;
`

export const Ul = styled.ul`
position: absolute;
  top: 54%;
  left: 53%;
  height: 91%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  li{
  height: 60px;  
  
}
`
export const Button = styled.button`
font-family: var(--fml-Barlow-Condensed);
cursor: pointer;
width: 180px;
height: 50px;

  font-size: 25px;
  font-weight: 500;
  /* padding: 5px 30px; */
  color: #fff;
  /* border-radius: 5px; */
  position: absolute;
  line-height: 50px;
  /* margin: 5px 30px; */
  opacity: 0;
  transition: all 0.3s ease;
  transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover:after{
  transform: scaleY(1);
  }
  &:hover{
  color: var(--color-dark);
}

  &::after{
  position: absolute;
  content: "";
  background: var(--color-light);  
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  transition: transform 0.3s ease;
}


`