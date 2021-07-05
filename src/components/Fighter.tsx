import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Tooltip,
    Fab
} from '@material-ui/core';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';

type FighterProps = {
    monster: {
        id: string;
        name: string;
        attack: number;
        defense: number;
        life: number;
        monsterImg: string;
    };
    yourItens?: {
        remedy: number;
        maximumPower: number;
    };
    commandFighter?: boolean;
    turn?: boolean;
    fight?: () => void;
    useItem?: any; //@todo corrigir
    opponentMonsterLife?: number;
}

const Fighter: React.FC<FighterProps> = (props) => {
    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        image={props.monster.monsterImg}
                        style={{
                            height: 140
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.monster.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.monster.life >= 0 ? props.monster.life : '0'} HP
                            • {props.monster.attack} Ataque
                            • {props.monster.defense} Defesa
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            { props.commandFighter && props.opponentMonsterLife! > 0 && props.monster.life > 0 ? (
                <CardActions>
                    <Fab
                        size="small"
                        color="primary"
                        variant="extended"
                        onClick={props.fight}
                        style={{
                            marginRight: "15px"
                        }}
                    >
                        {props.turn ? 'Ataque!' : 'Defenda!'}
                    </Fab>
                    <Tooltip
                        title="CURAR!"
                        placement="top"
                        style={{
                            marginRight: "15px"
                        }}
                    >
                        <Fab
                            size="small"
                            color="primary"
                            variant="extended"
                            onClick={() => props.useItem('remedy')}
                        >
                            {props.yourItens!.remedy} <FavoriteBorderIcon fontSize="small"/>
                        </Fab>
                    </Tooltip>
                    <Tooltip title="AUMENTAR ATAQUE!" placement="top">
                        <Fab
                            size="small"
                            color="primary"
                            variant="extended"
                            onClick={() => props.useItem('maximumPower')}
                        >
                            {props.yourItens!.maximumPower} <OfflineBoltOutlinedIcon fontSize="small"/>
                        </Fab>
                    </Tooltip>
                </CardActions>
            ) : (<></>)}
        </>
    )
}

export default Fighter;