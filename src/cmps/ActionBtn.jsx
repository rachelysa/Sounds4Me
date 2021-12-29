import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AppsIcon from '@mui/icons-material/Apps';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export function ActionBtn({ changeLayout, changeDiff, diff }) {

	const isDisable = (isPrev) => {
		if ((isPrev && diff === 0) || (!isPrev && diff === 18)) return true
		else return false
	}
	
	return (
		<div className='action-btn'>
			<div className='prev-next'>
				<Tooltip title="prev" arrow>
					<Button disabled={isDisable(true)} onClick={() => changeDiff(-1)}>
						<ArrowBackIosNewIcon />
					</Button>
				</Tooltip>
				<Tooltip title="next" arrow>
					<Button disabled={isDisable(false)} onClick={() => changeDiff(1)}>
						<ArrowForwardIosIcon />
					</Button>
				</Tooltip>
			</div>
			<div className='layout-switch'>
				<Tooltip title="gallery-layout" arrow>
					<Button onClick={() => {changeLayout('row')}}>
						< AppsIcon />
					</Button>
				</Tooltip>
				<Tooltip title="list-layout" arrow>
					<Button onClick={() => changeLayout('column')}>
						< DehazeIcon />
					</Button>
				</Tooltip>

			</div>
		</div>


	);
}
