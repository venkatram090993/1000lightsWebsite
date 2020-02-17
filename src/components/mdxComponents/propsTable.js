import React from "react"


const Table = ({data}) => {

return (
<div>
<table class="border-collapse sm: w-full">
    <thead>
        <tr>
            <th class="p-2 text-gray-600 text-base text-center  hidden lg:table-cell ">Name</th>
            <th class="p-2 text-gray-600 text-base  text-center  hidden lg:table-cell">Type</th>
            <th class="p-2 text-gray-600 text-base    text-center  hidden lg:table-cell">Default</th>
            <th class="p-2 text-gray-600 text-base  text-center  hidden lg:table-cell">Description</th>
        </tr>
    </thead>
    <tbody>

        {

            data.map((item)=>{
                return(
                    <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-2 text-gray-800 text-center border border-b block lg:table-cell relative lg:static sm: pt-6">
                <span class="lg:hidden absolute top-0 left-0 bg-green-400 px-2 py-1 text-xs font-bold uppercase">Name</span>
                {item.name}
            </td>
            <td class="w-full lg:w-auto p-2 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-green-400 px-2 py-1 text-xs font-bold uppercase">Type</span>
                {item.type}
            </td>
          	<td class="w-full lg:w-auto p-2 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-green-400 px-2 py-1 text-xs font-bold uppercase">default</span>
                {item.default}
          	</td>
            <td class="w-full lg:w-auto p-2 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static sm: pt-10">
                <span class="lg:hidden absolute top-0 left-0 bg-green-400 px-2 py-1 text-xs font-bold uppercase">description</span>
                {item.description}
            </td>
        </tr>
                )
            })

        }
        
      
      
    </tbody>
</table>
    </div>
  )
}

export default Table
