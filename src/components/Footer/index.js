import { Results, Typography } from "./style";

export default function EndResult({currentPosition}){
    return(
    <Results>
        <Typography> {currentPosition}/4 CONCLUÍDOS</Typography>
    </Results>
        );
    }