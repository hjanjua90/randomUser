import React,{useState} from 'react';
import {useParams,Link} from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { Avatar, Card, Button } from '@mui/material';
const SingleUser = () => {
    const {index:id} = useParams()
    const {users,getAddress} = useGlobalContext()
    // eslint-disable-next-line
    const [singleData,setSingleData] = useState(users[id])

    return (
        <>
        <Link to="/">
            <Button variant="contained" color="success">
            see list
            </Button>
        </Link>
        <Card variant="outlined" className="singleWrapper">
            <div>
                <Avatar
                    alt="Remy Sharp"
                    src={singleData.picture.medium}
                    sx={{ width: 150, height: 150 }}
                    />
            </div>
            <div>
                <p>First name : <h5 className="user-name info">{singleData.name.first}</h5></p>
                <p>Last name : <h5 className="user-name info">{singleData.name.last}</h5></p>
                <p>Gender : <h6 className="user-gender info">{singleData.gender}</h6></p>
                <p>Email : <span className='info'>{singleData.email}</span></p>
                <p>Phone : <span className='info'>{singleData.cell}</span></p>
                <p>Address : <span className='info'><address>{getAddress(singleData.location)}</address></span></p>
                <p>TimeZone : <span className='info'>{singleData.location.timezone.description}</span></p>
                <p>DOB: <span className='info'>{singleData.dob.date}</span></p>
            </div>
        </Card>

            
        </>
    )
}

export default SingleUser