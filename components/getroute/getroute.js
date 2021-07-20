import { useRouter } from 'next/router'
import styles from './getroute.module.scss'
// import Link from './link'

// function ActiveLink({ children, href }) {
export default function ActiveLink(props) {

  const router = useRouter()
  // const style = {
  //   marginBottom: 30,
  //   color: router.asPath.split('?product=')[1] === href ? 'red' : 'blue',
  // }

  const navbarLinks = props.items
  // [
  //   {name:"product1"},
  //   {name:"product2"},
  //   {name:"product3"},
  // ]

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   // router.push(href)
  //   router.push(`?product=${href}`)

  // }

  return <div className={styles.containergeneral}>
    <ul>





    {navbarLinks.map((item, index) => (

        <li onClick={() =>  router.push(`?product=${item.link}`)} className={router.asPath.split('?product=')[1] === item.link ? styles.linkactive : styles.link} >
        <span>{item.name}</span>
        </li>
 
    ))}

      
    {/* <li>
    <a href={href} onClick={handleClick} className={router.asPath.split('?product=')[1] === href ? styles.linkactive : styles.link} >

        {children}
    </a>
    </li> */}




    </ul>
    </div>

  // )
}

// export default ActiveLink