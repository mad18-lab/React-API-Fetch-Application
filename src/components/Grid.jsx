import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IoMdSearch } from "react-icons/io";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Grid = () => {
    const [gridData, setGridData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setGridData(data);
                setFilterData(data);
            });
    }, []);

    useEffect(() => {
        setFilterData(
            gridData.filter((item) => 
                item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                item.body.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [searchText, gridData]);

    const handleSearch = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 600 }
    ];

    return (
        <div className="mt-5 mx-auto">
            <div className="flex items-center gap-5 mb-5 justify-center">
                <input 
                    id="name" 
                    type="text" 
                    value={searchText} 
                    onChange={e => setSearchText(e.target.value)} 
                    placeholder="Search Here..." 
                    className="p-4 bg-black text-white rounded-lg w-[250px] sm:w-[400px] lg:w-[850px]" 
                />
                <IoMdSearch size={24} onClick={handleSearch} className="cursor-pointer" />
            </div>
            <div style={{ height: 700, width: '80%' }} className="mx-auto">
                <DataGrid
                    rows={gridData}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </div>
            <Dialog 
                open={open}
                onClose={handleClose}
                TransitionComponent={Slide}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Search Results</DialogTitle>
                <DialogContent>
                    {filterData.length > 0 ? (
                        filterData.map(item => (
                            <div key={item.id}>
                                <DialogContentText>
                                    <strong>{item.title}</strong>
                                </DialogContentText>
                                <DialogContentText>
                                    {item.body}
                                </DialogContentText>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <DialogContentText>No results found</DialogContentText>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Grid;
