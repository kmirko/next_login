import Link from 'next/link'

const routes = [
    {title : "Server", path: '/server'},
    {title : "Client", path: '/client'},
    {title : "StaticProps", path: '/staticprops'},
]


export default function Navbar(){
 return(
    <div style={{background:'pink', color: '#fff', height: '70px', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        {routes.map(r=>(
            <Link href={r.path}>{r.title}</Link>
        ))}
    </div>
 )
}