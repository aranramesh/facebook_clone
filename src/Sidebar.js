import React from 'react'
import "./css/sidebar.css"

function Sidebar (){
    return (
        <div className='sidebar'>
          
            <div className='fone'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAclBMVEUAAAD29vb9/f1xcXGlpaWampr////5+fmEhISHh4fz8/OsrKze3t7s7OxISEji4uLBwcG6urrU1NR4eHjo6Og9PT2QkJCWlpaysrI1NTVPT08SEhLHx8cKCgolJSVWVlZiYmIaGhorKytBQUFeXl5paWm4BSkVAAAGs0lEQVR4nO3d63LaMBAFYNmABA63EKC5kECa9P1fsThAAsFIu9KuJHv2/OpMZ2x/YyDWQUiq6G5U6gtgjNjaGbG1M2JrZ8RGE1Mn4vki2UxZmslssVjMJvU/45w0hs3oYjN6flGHvDyPNoWOweO3leWmp36nt9El+5m5baa8X13J6qzu2V+azDa9mDbK6jwvNO/JWW2mXN+U1Vnz3jpOm5ncvmnHWzfhxDHayvG7g6bU24zxI4XPVo6dsjqMODYbkMaJ47KZ2SvQ9r7kes8x2czS/V475Y0Lx2MzkzcwTam/TJ+WLDZTYWh7XMWC47CZ6glFU+qDBcdgM9UHkqbUtGDA0duMcT2NNOWZYdTKYHv2oCm1pf8zR24zn140pf6R46ht5T9P2n68So0jtunrITY8D8TjOVqbfgigKTWkxZHa9DCIptSIFEdp0/ZRNiR/KHGENv0nmKbUgBBHZ9MDAppSfTocmU3fkdCUeiTDUdn0IxFNqXsqHJFN35PR6HA0NlKaUnOaJxQSW7khpSm1IcFR2MhpSi0ocAS2ckFOo8GF28BFJC7jcFywjYmm1Cx4IB5qg3es2LwE15aBNkzHik1w4Rxmw3Ws2IR2skE2U/1lpCn1FFZbhtjwHSs2q6DaMsBmquZv6SnzEYLzt5nCp2PFJqSTDbBtI9CU+kxgK3dRaErtvB9QfG0BHSs23oWzpy2oY8Wm5zlW9bMFdqzYeHayXrbgjhUbv07Wx0bQsWKz9sF52Eg6Vmx8Olm8TfcT0Lw6WbQtEU2pOzQOayOrj/FBF85IG3ERiQu2k8XZynlCGrq2RNkYikhOHMaWnIbEIWwsHSs2mE4WbmMrInFBdLJgWyY0zDxZqI2vY8XmBVw4A22cHSs24E4WZuPtWLF5A3ayIJuZ8Has2AALZ4gtRhGJywpUOANspsDPY+UOqJN12/zmsXJnCuhknTYTqWPFZuvGuW271Iob2QXbInas2Dg7WYctaseKjauTtdsid6zYOCYBW23RO1Zs7J2szZagY8XG2slabEk6Vmxsk4Bv25IVkbhYOtmbtoRFJC63O9lbNsJ5rNy52cnesCXtWLG51ck22xJ3rNjcmCfbaMugiMSlubZssmVRROLSWFs22FpIa8Zd27IpInFp6GSvbC2lNeF+2/LpWLF5vepkf9nM8sV9lExzNQn40pZXx4rN705WXdK4J3vy5ukSd27Lr2PF5rKTPbOZou20X5OAf2x5dqzYnHeyZ7Y8O1Zstg22aPNYufMzT/Zky7ytw+S72TvaiH7km0dOc/YONtPGR//bWZjz+9bmx5HrvJ3dt+z7Y2wOE5xrm5mlvhbyfI0JVLc+I0/5+qysbVXqK2FIdbCV7SjHcemXB1s3HrYusz3YuviS/HpRqsK0tfyxZ2xqW9tKZFg2X7Z2df/QzDtv69Zz8imL2lZMUl8GSyaHv2/tr4Cuszr+7e7SuPSUQXkc46S+EIacxjgdfKCsHyePY9OuPVFuv8emERZ9iJvj+hnHLqjqQqd8yrS66IKMGaW+IrKMTrX5d6+sxzlPA4WnN/6eSXP2fYCePD5M2/qNcJ3X6cPjRDd91/G1Qc/+f6qfmNxvZc+cXe3+7pQX3+fb571mb/Oe91qU2dusU83FlmvEJrbcIjax5RaxiQ2Z1bB/Z8tgGDjeT2Z73eyfyx3RYV+0JLOBluMIw6WyrWCr++iQn/ynsg1ha3EETZJIZevDbEGNfSrbHdAWUmqLTWxiO6TLnyViE5vYxCY2sYlNbGITm9jEJjaxiU1sYhOb2MQmNrGJTWxiE5vYxCY2sYlNbGITm9jytIWsSRbDZp9/areFbGoRw7YOsIXMkYths5/DagtaSiiGbWPd28huW2Zus+/gZ9/7xwTsRBjB9m7fkspuC1kENoJtZz+FwxbwYRLB5jiF4zUZsDJlBJtjN1DXPmL+2xHy2z6C9hErSv8dgPhtrpnsrr3t/Bc55LdVjkM79+3zfuxit9kfuAA2473qGrvNuYGry+Z/bm7bwHl8p60wnr8JZbY9uQ8NsHmuc8hsWxDs3eq9jjuvzbZfH8JWaK89TlltO8iPWSG2wjxnZpuCDg2z+Sy7xmj7AG1xDbMVxnxmZNtCNrgG2/aXgF5Tjs02LGE0sK3QG+QYnMn2Oof9Jh5jK8oCd+t4bMMKdlicbX/rlhgdh224BN80pK0wZTHvQbf2gNqgO/u+9+4rDXynedhqnjaz+d1gPXJlaO8Ofw44HzozWvfn4wIH87DVV2Ocy5LUgV4J8GhYWOFla03E1s502fYfCyOFrLw8ZmoAAAAASUVORK5CYII=" />
                <h5>Home</h5>
            </div>

            <div className='fone'>
                <img src="https://previews.123rf.com/images/yupiramos/yupiramos2002/yupiramos200212381/139678536-face-young-man-in-frame-circular-avatar-character-icon-vector-illustration-design.jpg" />
                <h5>Aran Ramesh</h5>
            </div>

            <div className='fone'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" />
                <h5>Watch</h5>
            </div>

            <div className='fone'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" />
                <h5>MarkerPLace</h5>
            </div>

            
            <div className='fone'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" />
                <h5>Community</h5>
            </div>

              
            <div className='fone'>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png" />
                <h5>Games</h5>
            </div>

            <div className='fone'>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/shortcut-2002936-1686336.png" />
                <h5>shortcuts</h5>
            </div>

            <div className='fone'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bfbc4b9-8bd1-4ca2-b19a-165c397e4174/dcpl7sg-239269ce-3120-4f14-a5c3-28542561fa2d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiZmJjNGI5LThiZDEtNGNhMi1iMTlhLTE2NWMzOTdlNDE3NFwvZGNwbDdzZy0yMzkyNjljZS0zMTIwLTRmMTQtYTVjMy0yODU0MjU2MWZhMmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l0Nhr1Dxhb48f3BycGO1pwdl_a9Ko_bAAXoq76wnIwk"/>
                <h5>Call Of Duty </h5>
            </div>

            <div className='fone'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bfbc4b9-8bd1-4ca2-b19a-165c397e4174/dcpl7sg-239269ce-3120-4f14-a5c3-28542561fa2d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiZmJjNGI5LThiZDEtNGNhMi1iMTlhLTE2NWMzOTdlNDE3NFwvZGNwbDdzZy0yMzkyNjljZS0zMTIwLTRmMTQtYTVjMy0yODU0MjU2MWZhMmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l0Nhr1Dxhb48f3BycGO1pwdl_a9Ko_bAAXoq76wnIwk"/>
                <h5>Modern Combact 2</h5>
            </div>

            <div className='fone'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bfbc4b9-8bd1-4ca2-b19a-165c397e4174/dcpl7sg-239269ce-3120-4f14-a5c3-28542561fa2d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiZmJjNGI5LThiZDEtNGNhMi1iMTlhLTE2NWMzOTdlNDE3NFwvZGNwbDdzZy0yMzkyNjljZS0zMTIwLTRmMTQtYTVjMy0yODU0MjU2MWZhMmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l0Nhr1Dxhb48f3BycGO1pwdl_a9Ko_bAAXoq76wnIwk"/>
                <h5>PUBG</h5>
            </div>

            <div className='fone'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bfbc4b9-8bd1-4ca2-b19a-165c397e4174/dcpl7sg-239269ce-3120-4f14-a5c3-28542561fa2d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiZmJjNGI5LThiZDEtNGNhMi1iMTlhLTE2NWMzOTdlNDE3NFwvZGNwbDdzZy0yMzkyNjljZS0zMTIwLTRmMTQtYTVjMy0yODU0MjU2MWZhMmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.l0Nhr1Dxhb48f3BycGO1pwdl_a9Ko_bAAXoq76wnIwk"/>
                <h5>FreeFire</h5>
            </div>



        </div>
    )
}

export default Sidebar;