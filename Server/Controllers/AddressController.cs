using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/addresses")]
public class AddressController: Controller{
    private PostContext context;

    public AddressController(PostContext context){
        this.context=context;
    }
    [HttpGet]
    public List<Address> GetAllAddresses(string country, string city, int? page, string sort, int pageLength = 5, string dir="asc"){
        IQueryable<Address> query = context.Addresses;
        if (!string.IsNullOrWhiteSpace(country))
            query = query.Where(d => d.Country==country);
        if(!string.IsNullOrWhiteSpace(city))
            query=query.Where(d => d.City==city);
        if(page.HasValue)
            query=query.Skip(page.Value*pageLength);
        if(!string.IsNullOrWhiteSpace(sort))   
            switch (sort)
            {
                case "city":
                    if(dir=="asc")
                        query=query.OrderBy(d => d.City);
                    if(dir=="des")
                        query=query.OrderByDescending(d => d.City);
                    break;
                case "country":
                    if(dir=="asc")
                        query= query.OrderBy(d => d.Country);
                    if(dir=="des")
                        query=query.OrderByDescending(d => d.City);
                    break;
            }
        query = query.Take(pageLength);
        return query.ToList();
    }

    [Route("{id}")]
    [HttpGet]
    public IActionResult GetAddress(int id){
        var address = context.Addresses.Include(d => d.Persons).SingleOrDefault(d => d.Id == id);
        if(address==null){
            return NotFound();
        }
        return Ok(address);
    }

    [HttpPost]
    public IActionResult CreateAddress([FromBody] Address newAddress){
        context.Addresses.Add(newAddress);
        context.SaveChanges();
        return Created("", newAddress);
    }
   
    
    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeleteAddress(int id){
        var address = context.Addresses.Find(id);
        if(address==null){
            return NotFound();
        }
        context.Addresses.Remove(address);
        context.SaveChanges();
        return NoContent();
    }
    [HttpPut]
    public IActionResult UpdateAddress([FromBody] Address updateAddress){
        var address = context.Addresses.Find(updateAddress.Id);
        if (address==null){
            return NotFound();
        }
        address.City=updateAddress.City;
        address.Country=updateAddress.Country;
        address.PostalCode=updateAddress.PostalCode;
        address.Street=updateAddress.Street;
        address.Number=updateAddress.Number;

        context.SaveChanges();
        return Ok(address);
    }
}