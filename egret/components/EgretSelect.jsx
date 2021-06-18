import React, { useState }  from 'react';
import { Select, MenuItem, FormControl, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { COLORS } from '../../app/config'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
	},
	root: (props) => ({
		borderRadius: 3,
		backgroundColor: props.backgroundcolor ? props.backgroundcolor : COLORS.TRANSPARENT,
		opacity: props.opacity,
		'& .MuiSelect-root': {
			color: props.color ? props.color : COLORS.WHITE,
			padding: '25px 16px 25px 15px',
			border: `1px solid ${props.bordercolor ? props.bordercolor : COLORS.PRIMARY}`,
			borderRadius: props.borderradius,
			boxShadow: props.boxshadow,
			'&:hover': {
				backgroundColor: props.backgroundcolor ? 'unset' : COLORS.PRIMARY,
				border: props.backgroundcolor ? 'unset' : `1px solid ${COLORS.PRIMARY}`
			},
		},
		'& .MuiSelect-icon': {
			color: props.iconcolor ? props.iconcolor : COLORS.WHITE
		},
		'&.MuiInput-underline:before': {
			borderBottom: 'none'
		},
		'&.MuiInput-underline:after': {
			borderBottom: 'none'
		},
		'&.MuiInput-underline:hover:not(.Mui-disabled):before': {
			borderBottom: 'none'
		}
	}),
}));

function EgretSelect(props) {
	const { hassearch = true } = props
	const { placeholder, data, className, onChange, menuClass, backgroundcolor, bordercolor, color, borderradius, boxshadow, iconcolor, opacity, ...rest } = props;
	const classes = useStyles({ 
		backgroundcolor: backgroundcolor ? backgroundcolor : null,
		bordercolor: bordercolor ? bordercolor : null,
		color: color ? color : null,
		borderradius: borderradius !== undefined ? borderradius : 10,
		boxshadow: boxshadow ? boxshadow : 'unset',
		iconcolor: iconcolor ? iconcolor : null,
		opacity: opacity ? opacity : 1.0
	});
	const [value, setValue] = useState(placeholder ? placeholder : '');

	const handleChange = (event) => {
		setValue(event.target.value);
		if (onChange)
			onChange(event.target.value);
	};

	const renderValue = (value) => {
		let find = data.find(item => item.id === value);
		return (
			<div>
				{find ? find.name : value}
			</div>
		)
	};

	return (
		<FormControl className={className}>
			<Select
				className={classes.root}
				value={value}
				onChange={handleChange}
				renderValue={(value) => renderValue(value)}
				displayEmpty={true}
				MenuProps={{
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "left"
					},
					transformOrigin: {
						vertical: "top",
						horizontal: "left"
					},
					getContentAnchorEl: null,
					className: menuClass ? menuClass : 'selectPaper'
				}}
				{...rest}
			>
				{hassearch && (
					<MenuItem className="search-input" value={0} onClick={(event) => event.stopPropagation()}>
						<TextField
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
					</MenuItem>
				)}
				{data.map((item, index) => (
					<MenuItem value={item.id ? item.id : item} key={index}>{item.name ? item.name : item}</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default EgretSelect;
