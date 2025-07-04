"use client"; // Needed for Next.js App Router

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ScrollArea } from "@app/components/ui/scroll-area"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@app/components/ui/tabs"
import { Separator } from "@app/components/ui/separator";
import { ExternalLink } from "@app/components/functions/external-link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Results",
    description:
        "A free tool that generates a list of who doesn't follow back and who you don't follow back on Instagram.",
    metadataBase: new URL("https://follow-diff.vercel.app/results"),
};

const ResultsPage = () => {
    const router = useRouter();
    const [notFollowingBack, setNotFollowingBack] = useState<string[]>([]);
    const [notFollowedBack, setNotFollowedBack] = useState<string[]>([]);

    useEffect(() => {
        const storedFollowers = localStorage.getItem("followersContent");
        const storedFollowing = localStorage.getItem("followingContent");

        if (!storedFollowers || !storedFollowing) {
            router.push("/"); // Redirect to home if no data
            return;
        } else if (storedFollowers && storedFollowing) {
            const followersList = JSON.parse(storedFollowers) as string[];
            const followingList = JSON.parse(storedFollowing) as string[];

            // Find users you follow, but they don't follow you back
            const notFollowingBackList = followingList.filter(user => !followersList.includes(user));
            setNotFollowingBack(notFollowingBackList);

            // Find users who follow you, but you don’t follow them back
            const notFollowedBackList = followersList.filter(user => !followingList.includes(user));
            setNotFollowedBack(notFollowedBackList);
        }
    }, [router]);

    return (
        <div className="max-w-2xl mx-auto my-5 p-6 bg-white dark:bg-black shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Comparison Results</h1>

            <Tabs defaultValue="not-following-back">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="not-following-back">They don&apos;t follow</TabsTrigger>
                    <TabsTrigger value="not-followed-back">You don&apos;t follow</TabsTrigger>
                </TabsList>
                <TabsContent value="not-following-back">
                    <ScrollArea className="rounded-md border p-4">
                        <ul>
                            {notFollowingBack.length > 0 ? notFollowingBack.map(user =>
                                <>
                                    <li key={user} className="py-3">
                                        <ExternalLink url={`https://instagram.com/${user}`} text={user} />
                                    </li>
                                    <Separator />
                                </>) : <p>Everyone follows you back</p>}
                        </ul>
                    </ScrollArea>
                </TabsContent>
                <TabsContent value="not-followed-back">
                    <ScrollArea className="rounded-md border p-4">
                        <ul>
                            {notFollowedBack.length > 0 ? notFollowedBack.map(user =>
                                <>
                                    <li key={user} className="py-3">
                                        <ExternalLink url={`https://instagram.com/${user}`} text={user} />
                                    </li>
                                    <Separator />
                                </>) : <p>You follow everyone who follows you</p>}
                        </ul>
                    </ScrollArea>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ResultsPage;