// 'use client'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import avatarImage from '../../assets/images/avatar.jpg'
import Link from 'next/link'
export default function UserNav() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="ghost" className='relative h-8 w-8 rounded-full'>
                <Avatar>
                    <AvatarImage src="/avatar/avatar.jpg"/>
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56 z-[99998] mr-6'>
            <DropdownMenuLabel>
                <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>Dung Nguyen</p>
                    <p className='text-xs leading-none text-muted-foreground'>dungdeptrai@gmail.com</p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="h-2px bg-[#e6e9ee]" />
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Settings
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="h-2px bg-[#e6e9ee]" />
                <DropdownMenuItem>
                    <Link href="/login" className="w-full h-full block">
                        Log out
                    </Link>
                </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
