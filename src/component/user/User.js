export default function User({item,appFn}) {

    return(
        <div>
            {item.id}<button onClick={()=>
            { appFn (item.id)}}>

            Click me</button>

        </div>
    );
}