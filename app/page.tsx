'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import GameList from '@/components/Home/GameList'
import Hero from '@/components/Home/Hero'
import Search from '@/components/Home/Search'
import {
  getFirestore, doc, setDoc, getDoc,
  collection, getDocs, query, where
} from "firebase/firestore";
import app from './firebase'
import { useEffect, useState } from 'react'
import { PostsProps } from '@/type'
import Posts from '@/components/Home/Posts'

export default function Home() {
  const db = getFirestore(app);

  const [posts, setPosts] = useState<PostsProps[]>([]);

  useEffect(() => {
    getPost()
  }, [doc])

  // fireStore doc data 가져오기
  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"))
    querySnapshot.forEach((doc) => {
      const data = doc.data() as PostsProps;
      setPosts((posts) => [...posts, { ...data, id: doc.id }])
    })
  }


  return (
    <main>
      <Header />
      <div className='max-width'>
        <Hero />
        <Search />
        <GameList />
        {posts ? <Posts posts={posts} /> : null}
      </div>
      <Footer />
    </main>
  )
}
