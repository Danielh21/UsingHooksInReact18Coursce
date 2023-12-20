import { useRef, useState } from 'react'

const demouseref = () => {


    //Case 1

    const imgRef = useRef();
    const [cnt, setCnt] = useState(0);

    //Case 2¨
    const mouseOverCnt = useRef(0);

    return (
        <div className='container'>

            <img 
             src='/images/Speaker-1124.jpg' 
             ref={imgRef}
             style={{filter: "grayscale(100%)"}}
             onMouseOver={() => {
                imgRef.current.style.filter = "grayscale(0%)";
                setCnt(cnt+1)
                mouseOverCnt.current++;
             }}
             onMouseOut={() => {
                imgRef.current.style.filter = "grayscale(100%)"
             }}
             />
            <hr />
            <button onClick={() => {
                alert("registered MouseOver: " + mouseOverCnt.current)
            }}>
            Register
            </button>

        </div>
    )
}

export default demouseref