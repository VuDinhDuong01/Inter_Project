
import { Helmet } from 'react-helmet-async'
export const HelmetAsync = ({title}:{title:string}) => {
    return (
        <Helmet>
            <title>
                {title}
            </title>
            <meta name="description" content="Free Web tutorials" />
            <meta name="keywords" content="page blog" />
            <meta name="author" content="its me" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
    )
}
