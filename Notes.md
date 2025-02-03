Lect 13.1 

0 - 15 min
1. initailsed a tailwind project and Learn about the content in tailwind.config.js -> Here we need to mention the files where we worte the forntend code.

15 - 30 min
1. talked about the flex & justify- content concept, used the Tailwind syntax.

30 - 45 min 
1. Grid in tailwind.
 > <div className='grid grid-cols-12'>
      <div className='bg-blue-300 col-span-1' >child 1</div>
      <div className='bg-red-300 col-span-2'>child 2</div>
      <div className='bg-green-300 col-span-2'>child 3</div>
    </div>

2. Responsivness in Tailwind.
    • It follows a MOBILE First Approach.
    • Conditions lagi hai jaise xl,md,sm ye tab activate hogi jab aunke particular size jitna,ya ausse jada ki screen hogi, warna by-default bina conditon wala active rahega.

 > <div className='xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300'>
      hi there
    </div> 

3. Breaking point in Tailwind, Div comes below one another when size changes.

 >  <div className='grid grid-cols-12'>
      <div className=' sm:col-span-5 bg-blue-300 col-span-12' >child 1</div>
      <div className='sm:col-span-5 bg-red-300 col-span-12'>child 2</div>
      <div className='sm:col-span-2 bg-green-300 col-span-12'>child 3</div>
    </div>

45 - 60 min
1. started a project.