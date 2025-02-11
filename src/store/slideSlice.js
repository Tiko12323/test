import { createSlice } from '@reduxjs/toolkit'

const slideSlice = createSlice({
  name: 'slide',
  initialState: [
    {
        url: 'https://s3-alpha-sig.figma.com/img/b5ab/1f69/b1a4232dabe9ce6d945217ce444d0c03?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2hB4lhlsuwXioXkOeRcQi5iM8ejqDJKr5RiAN0sotn7QzcdIaCCGG3qVK25Omdr-T8xDBjbBfRiqoQ6sGpySuHkjrFfuQ6~YyiLyPUyGnNHZ6fZRz-8KCKLkII9KUotYh06gahU~rW7N4fvP14Dq4eQzuXLcj0u5j4Lf0blZwhrV4OlrN~n6TJpdMtFzdn0bibNd23L-W9X6FfRpXIznOS49zsrdSAYuzkLN7S9RooKG3SJjKqJVpxvHjBPVfIXzTyxMCWD5vhLm8-Y~2BQEaNNGz3VvMkv61gsgO5NlP7OuuKbtUjXCEgceYS-CS5OKMSTRbNtC7YPj4g6y3Zziw__',
        caption: 'first slide'
      },
      {
        url: 'https://workbrighter.co/wp-content/uploads/2021/05/good-vs-bad-to-do-list-examples.png',
        caption: '2 slide'
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/b5ab/1f69/b1a4232dabe9ce6d945217ce444d0c03?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2hB4lhlsuwXioXkOeRcQi5iM8ejqDJKr5RiAN0sotn7QzcdIaCCGG3qVK25Omdr-T8xDBjbBfRiqoQ6sGpySuHkjrFfuQ6~YyiLyPUyGnNHZ6fZRz-8KCKLkII9KUotYh06gahU~rW7N4fvP14Dq4eQzuXLcj0u5j4Lf0blZwhrV4OlrN~n6TJpdMtFzdn0bibNd23L-W9X6FfRpXIznOS49zsrdSAYuzkLN7S9RooKG3SJjKqJVpxvHjBPVfIXzTyxMCWD5vhLm8-Y~2BQEaNNGz3VvMkv61gsgO5NlP7OuuKbtUjXCEgceYS-CS5OKMSTRbNtC7YPj4g6y3Zziw__',
        caption: '3 slide'
      }
  ],
  reducers: {
    usersAdd(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    }
    
  }
})

export const { usersAdd } = slideSlice.actions
export default slideSlice.reducer