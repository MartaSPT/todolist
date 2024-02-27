import AddSpace from './AddSpace.js'

function ButtonAdd() {
    function handleClick() {
        alert('You clicked me!');
    }
    return (
        <div>
            <AddSpace/>
            <button onClick={handleClick} type='button'>
                Add
            </button>
        </div>


    )
}

export default ButtonAdd;