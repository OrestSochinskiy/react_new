export default function Post({item,appFn}) {

    return(
        <div>
            {item.id}<button onClick={()=>
            { appFn (item.id)}}>

            Click me</button>

        </div>
    );
}