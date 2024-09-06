"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useEffect, useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";
import { OnRampTransactions } from "./OnRampTransactions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    
    return <div>
        <Center>
            <Card title="Send Money">
                <div className="min-w-80 pt-2">
                    <TextInput placeholder={"Number"} label="Phone Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async () => {
                            await p2pTransfer(number, Number(amount) * 100);
                            alert("Money sent successfully!");                            
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}