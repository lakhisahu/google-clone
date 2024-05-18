import { WebSearchResults } from "@/app/Components/WebSearchResults";
import Link from "next/link";
import { Result } from "postcss";

async function WebSearchPage({searchParams}){
    const cx = "053288e1dbd734952"
    const APIKey = "AIzaSyDnYe6WtpYK-44NOrxXXNv1zYMwb6I-pBg"
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${cx}&q=${searchParams?.searchTerm}`)
    if(!response.ok) throw new Error('Something went wrong')
    const data = await response.json()
    const results = data.items;
    if(!results){
        return(
            <div className="flex flex-col justify-center items-center pt-10">
                
                <h1 className="text-3xl mb-4">
                    No results found for {searchParams.searchTerm}
                </h1>
                <p className="text-lg">
                    Try searching the web or images for Something else
                    <Link href='/' className="text-blue-500"> Home </Link>
                </p>
                </div>
        )
    }

    return(
        <>
        <div>
           {results && <WebSearchResults results={data}/>}
        </div>
        </>
    )
}

export default WebSearchPage;