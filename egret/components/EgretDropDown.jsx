import React, { useEffect, useState } from 'react';
import { Icon, Paper, ClickAwayListener, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: 0,
		'& .MuiList-root': {
			padding: '0 !important',
		},
		'& .MuiListItem-root:hover': {
			backgroundColor: '#070C13',
		},
		boxShadow: '0px 0px 15px #00000029'
	},
}));

function EgretDropDown(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [options, setOptions] = useState([]);
	const anchorRef = React.useRef(null);

	const { data, selected, onChange, placeholder = 'All Spaces' } = props;

	useEffect(() => {
		setOptions(data);
		setValue(selected);
	}, [])

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	};

	const handleChange = (index, event) => {
		if (onChange) {
			onChange(index);
		}
		setValue(options[index]);
		handleClose(event);
	};

	const handleAllChange = (event) => {
		if (onChange) {
			onChange(null);
		}
		handleClose(event);
	};

	if (!data) {
		return <></>;
	}

	return (
		<div className="dropdown-component">
			<div
				ref={anchorRef}
				className={`flex flex-column dropdown-selected ${open ? 'active' : ''}`}
				onClick={handleToggle}
			>
				<div className="flex flex-middle container">
					{!value
						?
						<div className="name">{options.length > 0 ? placeholder : 'No Spaces'}</div>
						:
						<div className="name">{value.name}</div>
					}
					<Icon className="arrow">arrow_drop_down</Icon>
				</div>
			</div>
			<div className="dropdown-container" style={{ display: open ? 'block' : 'none' }}>
				<Paper classes={{ root: classes.root }}>
					<ClickAwayListener onClickAway={handleClose}>
						<div onKeyDown={handleListKeyDown}>
							<div className="flex flex-column search-container">
								<TextField
									className="search"
									placeholder="Search"
									onClick={(event) => event.stopPropagation()}
									InputProps={{
										endAdornment: (
										<InputAdornment position="start">
											<SearchIcon />
										</InputAdornment>
										),
									}}
								/>
							</div>
							{options.map((item, index) => (
								<div onClick={(event) => handleChange(index, event)} key={index}>
									<div className={`flex flex-column dropdown-item ${value && value.id === item.id ? 'selected-drop' : null}`}>
										<div className="name">{item.name}</div>
									</div>
								</div>
							))}
						</div>
					</ClickAwayListener>
				</Paper>
			</div>
		</div>
	);
}

export default EgretDropDown;
