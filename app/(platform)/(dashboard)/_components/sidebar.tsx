"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { BadgePlus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { NavItem, Organization } from "./nav-item";


interface SidebarProps {
    storageKey?: string;
}

export const Sidebar = ({
    //Prevents the accordion from expanding or collapsing on re-render
    storageKey ="t-sidebar-state", 
}: SidebarProps) => {
    //Stores which accordion was expanded or collapsed in local storage
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey, 
    {})
    // <record<string, any>> used because of dynamic data 

    const { 
        organization: activeOrganization,
        isLoaded: isLoadedOrg
     } = useOrganization(); //activeOrg is an alias

     const { 
        userMemberships,
        isLoaded: isLoadedOrgList
     } = useOrganizationList({
        userMemberships: {
            infinite: true
        }
     }) //userMemberships - refer Clerk docs for more info (its for pagination)

    //  The actual accordion accepts defaultAccordion
     const defaultAccordionValue: string[] = Object.keys(expanded)
     .reduce((acc: string[], key: string) => {
        if(expanded[key]) {
            acc.push(key)
        }

        return acc;
     }, [])
     
     //sets the curr value to its opposite 
     const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id]
        }));
     }
     
     //loading state
     if(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
            <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-10 w-[50%]" />
                <Skeleton className="h-10 w-10" />
            </div>
            <div className="space-y-2">
                <NavItem.Skeleton />
                <NavItem.Skeleton />
                <NavItem.Skeleton />
            </div>
            </>
        )
     }

    return (
        <>
        <div className="font-medium text-xs flex items-center mb-1">
            <span className="pl-4">
                Workspaces
            </span>  
            <Button asChild type="button" size="icon" variant="ghost" className="ml-auto">
                <Link href="/select-org">
                    <BadgePlus 
                    className="h-4 w-4"
                    />
                </Link>    
            </Button>        
        </div>
        <Accordion type="multiple" defaultValue={defaultAccordionValue} className="space-y-2">
            {userMemberships.data.map(({organization}) => (
                <NavItem 
                key = {organization.id}
                isActive={activeOrganization?.id === organization.id}
                isExpanded={expanded[organization.id]}
                organization={organization as Organization}
                onExpand={onExpand}
                />
            ))}
        </Accordion>
        </>
    )
}