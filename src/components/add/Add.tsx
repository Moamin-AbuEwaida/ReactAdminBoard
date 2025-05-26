import type { GridColDef } from '@mui/x-data-grid';
import './Add.scss'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    columns: GridColDef[];
    slug: string;
}

const Add = (props: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // add new item
        // axios.post(`/api/${slug}s`,{})
    }
    return (
        <div className='add'>
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>x</span>
                <h1>Add new {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns.filter((item) => item.field !== 'id' && item.field !== 'img').map(column => (
                        <div className="item" key={column.headerName}>
                            <label>{column.headerName}</label>
                            <input type={column.type} placeholder={column.field} />
                        </div>
                    ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add