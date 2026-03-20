import { FetchCustomerSalesHeader, FetchFestiveSales } from '../../utils/APICalls'
import React, { useEffect, useState,useRef } from 'react'
import { RiCloseFill, RiShareForward2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import NavratriLeads from '../../assets/Images/NavratriLeads.png'
import DhanterasLeads from '../../assets/Images/DhanterasLeads.png'
import OnamLeads from '../../assets/Images/OnamLeads.png'
import NewYearLeads from '../../assets/Images/NewYearLeads.png'
import DiwaliLeads from '../../assets/Images/DiwaliLeads.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const OldDataLeads = ({OldDataLeadsShow,setOldDataLeadsShow}) => {

      const headerRef = useRef(null);
      const rowRefs = useRef([]);
    
      const syncScroll = (source, scrollLeft) => {
        if (source !== "header" && headerRef.current) {
          headerRef.current.scrollLeft = scrollLeft;
        }
        rowRefs.current.forEach((ref, index) => {
          if (ref && source !== index) {
            ref.scrollLeft = scrollLeft;
          }
        });
      };
    
      // Clear old refs on rerender
      rowRefs.current = [];

    const dealershipDetails = useSelector((state)=>state.DealershipDetails)
    const dealer_code = 'UP310'
    const toDate = '15/01/2025'
    const fromDate = '01/01/2025'

    const [festiveSales,setfestiveSales] = useState([])


   

   
  

    const festiveBuyers = [
        {
            year:'2021',
            festivals:[
        {
            name:'Navratri',
            count:20,
            fromDate:'07/10/2021',
            toDate:'15/10/2021',
            icon:NavratriLeads,
            background:'bg-[#FCE4EC] w-full'
        },
        {
            name:'Dhanteras',
            count:20,
             fromDate:'01/10/2021',
            toDate:'03/10/2021',
            icon:DhanterasLeads,
            background:'bg-[#FFF8E1] w-full'
        },
        {
            name:'Diwali',
            count:20,
            fromDate:'03/10/2021',
            toDate:'05/10/2021',
            icon:DiwaliLeads,
             background:'bg-[#FFCC80] w-full'
        },
        {
            name:'Onam',
            count:20,
            fromDate:'12/08/2021',
            toDate:'23/08/2021',
            icon:OnamLeads,
               background:'bg-[#E8F5E9] w-full'
        },
        {
            name:'New Year',
            count:20,
            fromDate:'25/12/2021',
            toDate:'01/01/2022',
            icon:NewYearLeads,
               background:'bg-[#B3E5FC] w-full'
        },
       
      
        
    ]
        },
        {
            year:'2022',
            festivals:[
        {
            name:'Navratri',
            count:20,
            fromDate:'26/09/2022',
            toDate:'05/10/2022',
            icon:NavratriLeads,
            background:'bg-[#FCE4EC] w-full'
        },
        {
            name:'Dhanteras',
            count:20,
            fromDate:'21/10/2022',
            toDate:'23/10/2022',
            icon:DhanterasLeads,
            background:'bg-[#FFF8E1] w-full'
        },
        {
            name:'Diwali',
            count:20,
            fromDate:'23/10/2022',
            toDate:'25/10/2022',
            icon:DiwaliLeads,
             background:'bg-[#FFCC80] w-full'
        },
        {
            name:'Onam',
            count:20,
            fromDate:'30/08/2022',
            toDate:'08/09/2022',
            icon:OnamLeads,
               background:'bg-[#E8F5E9] w-full'
        },
        {
            name:'New Year',
            count:20,
            fromDate:'25/12/2022',
            toDate:'01/01/2023',
            icon:NewYearLeads,
               background:'bg-[#B3E5FC] w-full'
        },
       
      
        
    ]
        },
        {
            year:'2023',
            festivals:[
        {
            name:'Navratri',
            count:20,
            fromDate:'15/10/2023',
            toDate:'24/10/2023',
            icon:NavratriLeads,
            background:'bg-[#FCE4EC] w-full'
        },
        {
            name:'Dhanteras',
            count:20,
              fromDate:'09/11/2023',
            toDate:'11/11/2023',
            icon:DhanterasLeads,
            background:'bg-[#FFF8E1] w-full'
        },
        {
            name:'Diwali',
            count:20,
              fromDate:'11/11/2023',
            toDate:'13/11/2023',
            icon:DiwaliLeads,
             background:'bg-[#FFCC80] w-full'
        },
        {
            name:'Onam',
            count:20,
              fromDate:'20/08/2023',
            toDate:'31/08/2023',
            icon:OnamLeads,
               background:'bg-[#E8F5E9] w-full'
        },
        {
            name:'New Year',
            count:20,
              fromDate:'25/12/2023',
            toDate:'01/01/2024',
            icon:NewYearLeads,
               background:'bg-[#B3E5FC] w-full'
        },
       
      
        
    ]
        },
        {
            year:'2024',
            festivals:[
        {
            name:'Navratri',
            count:20,
            fromDate:'03/10/2024',
            toDate:'12/10/2024',
            icon:NavratriLeads,
            background:'bg-[#FCE4EC] w-full'
        },
        {
            name:'Dhanteras',
            count:20,
             fromDate:'28/10/2024',
            toDate:'30/10/2024',
            icon:DhanterasLeads,
            background:'bg-[#FFF8E1] w-full'
        },
        {
            name:'Diwali',
            count:20,
             fromDate:'30/10/2024',
            toDate:'01/11/2024',
            icon:DiwaliLeads,
             background:'bg-[#FFCC80] w-full'
        },
        {
            name:'Onam',
            count:20,
            icon:OnamLeads,
             fromDate:'05/09/2024',
            toDate:'15/09/2024',
               background:'bg-[#E8F5E9] w-full'
        },
        {
            name:'New Year',
            count:20,
             fromDate:'25/11/2024',
            toDate:'01/01/2025',
            icon:NewYearLeads,
               background:'bg-[#B3E5FC] w-full'
        },
       
      
        
    ]
        },
        {
            year:'2025',
            festivals:[
        {
            name:'Navratri',
            count:20,
            fromDate:'22/09/2025',
            toDate:'30/09/2025',
            icon:NavratriLeads,
            background:'bg-[#FCE4EC] w-full'
        },
        {
            name:'Dhanteras',
            count:20,
             fromDate:'16/10/2025',
            toDate:'18/10/2025',
            icon:DhanterasLeads,
            background:'bg-[#FFF8E1] w-full'
        },
        {
            name:'Diwali',
            count:20,
             fromDate:'19/10/2025',
            toDate:'21/10/2025',
            icon:DiwaliLeads,
             background:'bg-[#FFCC80] w-full'
        },
        {
            name:'Onam',
            count:20,
            icon:OnamLeads,
             fromDate:'25/08/2025',
            toDate:'04/09/2025',
               background:'bg-[#E8F5E9] w-full'
        },
        {
            name:'New Year',
            count:20,
             fromDate:'25/12/2025',
            toDate:'01/01/2026',
            icon:NewYearLeads,
               background:'bg-[#B3E5FC] w-full'
        },
       
      
        
    ]
        },

    ]


    const [bookerBuyer,setBookerBuyer] = useState('Bookers')
    

    const years = ['2025','2024','2023','2022','2021'];
    const [yearsShow,setYearsShow] = useState(false);
    const [selectedYear,setSelectedYear] = useState(years[0])

      const [modelFilter,setModelFilter] = useState([]);
      const [modelFilterShow,setModelFilterShow] = useState(false);
      const [selectedModelFilter,setSelectedModelFilter] = useState('Model')
    
      const [variantFilter,setVariantFilter] = useState([]);
      const [variantFilterShow,setVariantFilterShow] = useState(false);
      const [selectedVariantFilter,setSelectedVariantFilter] = useState('Variant')

      const [InsuranceFilter,setInsuranceFilter] = useState([]);
      const [InsuranceFilterShow,setInsuranceFilterShow] = useState(false);
      const [selectedInsuranceFilter,setSelectedInsuranceFilter] = useState('Insurance Partner')


      const [FinanceFilter,setFinanceFilter] = useState([]);
      const [FinanceFilterShow,setFinanceFilterShow] = useState(false);
      const [selectedFinanceFilter,setSelectedFinanceFilter] = useState('Finance Partner')


     useEffect(()=>{
        const customerHeadersFetch = async() => {
          try {
              const result = await FetchCustomerSalesHeader(dealershipDetails?.id)
            
              setModelFilter(result.data.filters.filter((data)=>data.type==='Model').map((model)=>model.value))
              setVariantFilter(result.data.filters.filter((data)=>data.type==='Variant').map((model)=>model.value))
              setInsuranceFilter(result.data.filters.filter((data)=>data.type==='Insurance').map((model)=>model.value))
              setFinanceFilter(result.data.filters.filter((data)=>data.type==='Finance').map((model)=>model.value))
              
          } catch (error) {
            console.log(error)
          }
        }
    
        customerHeadersFetch()
      },[])


       useEffect(()=>{
        const FestiveDeals = async() => {
           try {
             const result = await FetchFestiveSales(fromDate,toDate,dealershipDetails?.id,dealer_code,
              selectedModelFilter !== "Model" ? selectedModelFilter : null,
          selectedVariantFilter !== "Variant" ? selectedVariantFilter : null,
        selectedInsuranceFilter !== "Insurance Partner" ? selectedInsuranceFilter : null,
          selectedFinanceFilter !== "Finance Partner" ? selectedFinanceFilter : null,)
            setfestiveSales(result.data.msg)
           } catch (error) {
            console.log(error)
           }
        }
        FestiveDeals()
    },[selectedYear,selectedModelFilter,selectedVariantFilter,selectedInsuranceFilter,selectedFinanceFilter])

     const FestiveSales = async(fromDate,toDate) => {

       
         try {
             const result = await FetchFestiveSales(fromDate,toDate,dealershipDetails?.id,dealer_code,
              selectedModelFilter !== "Model" ? selectedModelFilter : null,
          selectedVariantFilter !== "Variant" ? selectedVariantFilter : null,
        selectedInsuranceFilter !== "Insurance Partner" ? selectedInsuranceFilter : null,
          selectedFinanceFilter !== "Finance Partner" ? selectedFinanceFilter : null,)
            setfestiveSales(result.data.msg)
           } catch (error) {
            console.log(error)
           }
    }


     
    


    

    



  return (
    <div className={`w-full h-full absolute top-0 bg-[white] z-[999]
    p-[1rem] overflow-y-scroll
    ${OldDataLeadsShow?'flex':'hidden'}`}
    style={{scrollbarWidth:'none'}}
    >

        

           <div className='flex flex-col h-fit items-start justify-between gap-[1rem] w-full'>
            <h1 className='text-[1.25rem] font-2 w-full flex items-center justify-between'>Leads Mined From Old Sales Data <RiCloseFill className='cursor-pointer' onClick={()=>{setOldDataLeadsShow(false)}}/></h1>
            <div className='flex w-full gap-[1rem] '>
              {
            festiveBuyers.filter((item)=>item.year==='2021')?.[0]?.festivals.map((fest,i)=>{
                return(
                    <div key={i} className={`p-[1rem] border-[1px] border-[#cfcfd7] rounded-[12px] flex items-center justify-center flex-col cursor-pointer ${fest.background}`}
                    onClick={()=>{FestiveSales(fest.fromDate,fest.toDate)}}
                    >
                    <img src={fest.icon} alt=""  className='w-[60px]'/>
                        <h1 className='font-2-book text-[1rem]'>{fest.name}</h1>
                        <h1 className='font-2 text-[2.25rem]'>{fest.count}</h1>
                        <h1 className='font-2 text-[1rem]'>Leads</h1>
                    </div>
                )
            })
           }
            </div>

            <div className='flex flex-col gap-[1rem] w-full'>

             <h1 className='text-[1.25rem] font-2 w-full flex items-center justify-between'>
              Navratri Leads
             </h1>

              <h1 className=' font-2 w-full flex items-center justify-between'>
                <div className='border-[1px] text-[1rem] font-2-book rounded-[10px] text-[#0b85ff] border-[#0b85ff] overflow-hidden'>
                  <button
                   onClick={()=>{setBookerBuyer('Bookers')}}
                  className={`py-[.25rem] px-[1rem] rounded-[8px]
                    ${bookerBuyer === 'Bookers' ?'bg-[#0b85ff] text-[white]':''}
                    `} >Booking</button>
                  <button 
                  onClick={()=>{setBookerBuyer('Buyers')}}
                  className={`py-[.25rem] px-[1rem] rounded-[8px]      ${bookerBuyer === 'Buyers' ?'bg-[#0b85ff] text-[white]':''}`} >Delivery</button>
                </div>


                <div className='flex items-center gap-[.5rem]'>
                 <button 
                               onClick={()=>{setYearsShow(!yearsShow)}}
                               className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem]
                               ${yearsShow?'border-b-[0px] rounded-b-[0px]':''}
                               `}>
                                 {selectedYear} <MdOutlineKeyboardArrowDown />
                                 <div className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] ${yearsShow?'':'hidden'}`}>
                                   {
                                     years.map((year,i)=>{
                                       return(
                                         <h1 key={i} onClick={()=>{setSelectedYear(year)}} className="py-[.15rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem]">{year}</h1>
                                       )
                                     })
                                   }
                 
                                 </div>
                               </button>
               
                   <button 
                                onClick={()=>{setModelFilterShow(!modelFilterShow)}}
                                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem]
                                ${modelFilterShow?'border-b-[0px] rounded-b-[0px]':''}
                                `}>
                                  {selectedModelFilter}<MdOutlineKeyboardArrowDown />
                  
                                  <div className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] ${modelFilterShow?'':'hidden'}`}>
                                    {modelFilter&&
                                      modelFilter.map((filter,i)=>{
                                        return(
                                          <h1
                                          onClick={()=>{setSelectedModelFilter(filter)}}
                                          key={i} className="py-[.15rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem]">{filter}</h1>
                                        )
                                      })
                                    }
                  
                                  </div>
                                </button>
                                  <button 
                                onClick={()=>{setVariantFilterShow(!variantFilterShow)}}
                                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem] w-[150px] justify-center whitespace-nowrap 
                                ${variantFilterShow?'border-b-[0px] rounded-b-[0px]':''}
                                `}>
                                 {selectedModelFilter === 'Variant'
  ? selectedVariantFilter
  : selectedVariantFilter?.split(' ').slice(0, 2).join(' ')}<MdOutlineKeyboardArrowDown />
                  
                                  <div className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] h-[300px] overflow-y-scroll whitespace-normal ${variantFilterShow?'':'hidden'}`}
                                  style={{scrollbarWidth:'none'}}
                                  >
                                    {variantFilter&&
                                      variantFilter.map((filter,i)=>{
                                        return(
                                          <h1 
                                          onClick={()=>{setSelectedVariantFilter(filter)}}
                                          key={i} className={`py-[.5rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem] border-b-[.5px] border-[#0b85ff] `}>{filter}</h1>
                                        )
                                      })
                                    }
                  
                                  </div>
                                </button>
                     <button 
                                onClick={()=>{setInsuranceFilterShow(!InsuranceFilterShow)}}
                                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem] w-[190px] justify-center whitespace-nowrap 
                                ${InsuranceFilterShow?'border-b-[0px] rounded-b-[0px]':''}
                                `}>
                                 {selectedInsuranceFilter === 'Insurance Partner'
  ? selectedInsuranceFilter
  : selectedInsuranceFilter?.split(' ').slice(0, 2).join(' ')}<MdOutlineKeyboardArrowDown />
                  
                                  <div className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] h-[300px] overflow-y-scroll whitespace-normal ${InsuranceFilterShow?'':'hidden'}`}
                                  style={{scrollbarWidth:'none'}}
                                  >
                                    {InsuranceFilter&&
                                      InsuranceFilter.map((filter,i)=>{
                                        return(
                                          <h1 
                                          onClick={()=>{setSelectedInsuranceFilter(filter)}}
                                          key={i} className={`py-[.5rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem] border-b-[.5px] border-[#0b85ff] `}>{filter}</h1>
                                        )
                                      })
                                    }
                  
                                  </div>
                                </button>
                     <button 
                                onClick={()=>{setFinanceFilterShow(!FinanceFilterShow)}}
                                className={`py-[.15rem] px-[1rem] border-[1px] border-[#0b85ff] text-[#0b85ff] rounded-[10px] relative flex items-center gap-[.5rem] w-[170px] justify-center whitespace-nowrap 
                                ${FinanceFilterShow?'border-b-[0px] rounded-b-[0px]':''}
                                `}>
                                 {selectedFinanceFilter === 'Finance Partner'
  ? selectedFinanceFilter
  : selectedFinanceFilter?.split(' ').slice(0, 2).join(' ')}<MdOutlineKeyboardArrowDown />
                  
                                  <div className={`absolute w-[calc(100%+2px)] flex flex-col bg-[white] z-[20] border-[1px] border-t-[0px] border-[#0b85ff] left-[-1px] top-[100%] rounded-b-[10px] h-[300px] overflow-y-scroll whitespace-normal ${FinanceFilterShow?'':'hidden'}`}
                                  style={{scrollbarWidth:'none'}}
                                  >
                                    {FinanceFilter&&
                                      FinanceFilter.map((filter,i)=>{
                                        return(
                                          <h1 
                                          onClick={()=>{setSelectedFinanceFilter(filter)}}
                                          key={i} className={`py-[.5rem] px-[1rem] hover:bg-[rgba(0,0,0,0.1)] text-[.95rem] border-b-[.5px] border-[#0b85ff] `}>{filter}</h1>
                                        )
                                      })
                                    }
                  
                                  </div>
                                </button>
                    
                </div>
              </h1>
                  
                   <div
            className="py-[.5rem] px-[1rem] bg-[#0b85ff] text-[white] rounded-[10px] font-2 flex items-center justify-start gap-[1rem] overflow-x-scroll relative"
            ref={headerRef}
            style={{ scrollbarWidth: "none" }}
            onScroll={(e) => syncScroll("header", e.target.scrollLeft)}
          >
            <h1 className="min-w-[200px]">Name</h1>
            <h1 className="min-w-[150px]">Contact No.</h1>
            <h1 className='min-w-[150px]  text-center'>Action</h1>
            <h1 className="min-w-[100px] text-center">Model</h1>
            <h1 className="min-w-[250px]">Variant</h1>
            <h1 className="min-w-[250px]">Color</h1>
            <h1 className="min-w-[150px]">Pan No.</h1>
            <h1 className="min-w-[150px]">Customer ID</h1>
            <h1 className="min-w-[200px]">Vin Number</h1>
            <h1 className="min-w-[100px]">Dealer code</h1>
            <h1 className="min-w-[150px]">Invoice Date</h1>
            <h1 className="min-w-[150px]">Delivery Date</h1>
            <h1 className="min-w-[150px]">Invoice No</h1>
            <h1 className="min-w-[150px]">Mode Of Purchase</h1>
            <h1 className="min-w-[200px]">Financer</h1>
            <h1 className="min-w-[150px]">Basic Amount</h1>
            <h1 className="min-w-[150px]">Insurance In House</h1>
            <h1 className="min-w-[200px]">Consultant Name</h1>
            <h1 className="min-w-[150px]">Address</h1>
            <h1 className="min-w-[150px]">City</h1>
            <h1 className="min-w-[150px]">State</h1>
            <h1 className="min-w-[150px]">Pin No.</h1>
            <h1 className="min-w-[150px]">Source</h1>
            <h1 className="min-w-[150px]">Sub Source</h1>
            <h1 className="min-w-[400px]">Insurance Company Name</h1>
            <h1 className="min-w-[150px]">Policy Status</h1>
            <h1 className="min-w-[200px]">Policy No</h1>
            <h1 className="min-w-[150px]">Policy Issue Date</h1>
            <h1 className="min-w-[150px]">KMI Invoice Price</h1>

          
          </div>

            {
            festiveSales && festiveSales.map((customer,i)=>{
                   return(
                    <div
                key={i}
                ref={(el) => (rowRefs.current[i] = el)}
                style={{ scrollbarWidth: "none" }}
                onScroll={(e) => syncScroll(i, e.target.scrollLeft)}
               
                className="py-[.5rem] px-[1rem] bg-[white] border-[1px] border-[#cfcfd7] text-[.875rem] rounded-[10px] font-2-book flex items-center justify-start gap-[1rem] overflow-x-scroll cursor-pointer hover:border-[#0b85ff] hover:text-[#0b85ff]"
              >
                <h1
                  className="min-w-[200px] overflow-x-scroll whitespace-nowrap"
                  style={{ scrollbarWidth: "none" }}
                >
                  {" "}
                  {customer?.stock_data?.["Registration Name"]}
                </h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["Contact Num1"]}</h1>
                <h1 className='min-w-[150px]  flex items-center justify-center'>
                 <div className='text-[1rem] font-2-book rounded-[10px] text-[#0b85ff] 
                 flex items-center gap-[.5rem] w-fit
                 '>
                  <button 
                  className={`py-[.25rem] px-[1rem] rounded-[8px] border-[#25d366] bg-[#25d366] text-[white] border-[1px]  `} >
                    <FaWhatsapp />
                  </button>
                  <button
                  className={`py-[.25rem] px-[1rem] rounded-[8px] bg-[white] text-[#0b85ff] border-[#0b85ff] border-[1px] 
                   
                    `} ><RiShareForward2Fill /></button>
                  
                </div>
                  

                </h1>
                <h1 className="min-w-[100px] text-[black] flex items-center justify-center"><h1 className=' p-[.5rem] px-[1rem] bg-[#efefef] rounded-[12px] w-full text-center text-[.75rem] font-2'>{customer?.stock_data?.["Model"]}</h1></h1>
                <h1 className="min-w-[250px]">{customer?.stock_data?.["Variant"]}</h1>
                <h1 className="min-w-[250px]">{customer?.stock_data?.["Color"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["PAN No"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["CustomerID"]}</h1>
                <h1 className="min-w-[200px]">{customer?.stock_data?.["Vin Number"]}</h1>
                <h1 className="min-w-[100px]">{customer?.stock_data?.["Dealer Code"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["Invoice Date"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["Delivery Date"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["Invoice No"]}</h1>
                <h1 className="min-w-[150px]">
                  {customer?.stock_data?.["Mode of Purchase"]}
                </h1>
                <h1
                  className="min-w-[200px] overflow-x-scroll whitespace-nowrap"
                  style={{ scrollbarWidth: "none" }}
                >
                  {customer?.stock_data?.["DSA/Financier"]}
                </h1>
                <h1 className="min-w-[150px]">{customer["Basic Amount"]}</h1>
                <h1 className="min-w-[150px]">
                  {customer?.stock_data?.["Insurance In house (Y/N)"]}
                </h1>
                <h1
                  className="min-w-[200px] overflow-x-scroll whitespace-nowrap"
                  style={{ scrollbarWidth: "none" }}
                >
                  {customer?.stock_data?.["Consultant Name"]}
                </h1>
                <h1
                  className="min-w-[150px] overflow-x-scroll whitespace-nowrap"
                  style={{ scrollbarWidth: "none" }}
                >
                  {customer?.stock_data?.["Address"]}
                </h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["City"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["State"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["Pin No."]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["Source"]}</h1>
                <h1 className="min-w-[150px]">{customer?.stock_data?.["Sub-source"]}</h1>
                <h1 className="min-w-[400px]">
                  {customer.stock_data?.["Insurance company name"]}
                </h1>
                <h1 className="min-w-[150px]">{customer.stock_data?.["Policy status"]}</h1>
                <h1 className="min-w-[200px]">{customer.stock_data?.["Policy number"]}</h1>
                <h1 className="min-w-[150px]">
                  {customer.stock_data?.["Policy issuance date"]}
                </h1>
                <h1 className="min-w-[150px]">
                  {customer.stock_data?.["KMI Invoice Price"]}
                </h1>
              </div>
                   )
            })
          }



            </div>
           </div>

    </div>
  )
}

export default OldDataLeads