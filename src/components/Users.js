import React, { useEffect, useState } from "react";
import {
    Card,
    Avatar,
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
} from "@mui/material";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import { months,years } from "../data";
const Users = () => {
    const { users, makeName } = useGlobalContext();
    const [data, setdata] = useState(users);
    const [gender, setGender] = useState("all");
    const [month, setMonth] = useState("01");
    const [year, setYear] = useState("1995");
    useEffect(() => {
        setdata(users);
        // es-lint-disable-next-line
    }, []);

    const handleChange = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
        if (event.target.value !== "all") {
        setdata(
            users.filter((ele) => {
            return ele.gender === event.target.value;
            })
        );
        } else {
        setdata(users);
        }
    };
    const SearchUser = (e) => {
        let srchtxt = e.target.value.toLowerCase();
        setdata(
        users.filter(
            (item) =>
            item.name.first.toLowerCase().includes(srchtxt) ||
            item.name.last.toLowerCase().includes(srchtxt)
        )
        );
    };
    const handleMonth = (e) => {
        let month = e.target.value;
        setMonth(month);
        setdata(
        users.filter(
            (item) =>
            item.dob.date.split('-')[1] === month 
        )
        );
    };
    const handleYear = (e) => {
        let year = e.target.value;
        setYear(year);
        setdata(
        users.filter(
            (item) =>
            item.dob.date.split('-')[0] === year 
        )
        );
    };
    const pad2 = (number) => {
        return (number < 10 ? '0' : '') + number
    }
    return (
        <>
        <div className="filters">
            <Box sx={{ maxWidth: 220 }}>
            <FormControl fullWidth>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                labelId="gender"
                id="demo-simple-select"
                label="gender"
                value={gender}
                onChange={(e) => handleChange(e)}
                >
                <MenuItem value="all">--- select ---</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                </Select>
            </FormControl>
            </Box>
            <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={(e) => SearchUser(e)}
            />
        </div>
        <div className="birthSelection">
            <Box sx={{ maxWidth: 220 }}>
            <FormControl fullWidth>
                <InputLabel id="month">Birth Month</InputLabel>
                <Select
                labelId="month"
                id="birthMonth"
                label="month"
                value={month}
                onChange={(e) => handleMonth(e)}
                >
                {
                    months.map((ele,index)=>{
                    return <MenuItem value={pad2(index+1)} key={index}>{ele}</MenuItem>
                    })
                }
                </Select>
            </FormControl>
            </Box>
            <Box sx={{ maxWidth: 220 }}>
            <FormControl fullWidth>
                <InputLabel id="year">Birth Year</InputLabel>
                <Select
                labelId="year"
                id="birthYear"
                label="year"
                value={year}
                onChange={(e) => handleYear(e)}
                >
                {
                    years.map((ele,index)=>{
                    return <MenuItem value={ele} key={index}>{ele}</MenuItem>
                    })
                }
                </Select>
            </FormControl>
            </Box>
        </div>

        <div className="users-wrapper">
            {data.map((d, index) => {
            return (
                <>
                <Link to={`/user/${index}`}>
                    <Card variant="outlined" key={index} className="userWrapper">
                    <div className="img-wrapper">
                        <Avatar
                        alt="Remy Sharp"
                        src={d.picture.medium}
                        sx={{ width: 100, height: 100 }}
                        />
                    </div>
                    <div>
                        <h5 className="user-name">{makeName(d.name)}</h5>
                        <span className="user-gender">{d.gender}</span>
                    </div>
                    </Card>
                </Link>
                </>
            );
            })}
        </div>
        </>
    );
};
export default Users;