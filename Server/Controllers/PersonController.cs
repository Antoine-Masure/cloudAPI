using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

[Route("api/v1/person")]
public class PersonController: Controller{
    private PostContext context;

    public PersonController(PostContext context){
        this.context=context;
    }
    [HttpGet]
    public List<Person> GetAllPersons(string firstName, string lastName, int? page, string sort, int pageLength =5, string dir="asc"){
        IQueryable <Person> query = context.Persons;
        if(!string.IsNullOrWhiteSpace(firstName))
            query = query.Where(d => d.FirstName == firstName);
        if(!string.IsNullOrWhiteSpace(lastName))
            query = query.Where(d => d.LastName == lastName);
        if(page.HasValue)
            query=query.Skip(page.Value*pageLength);
        if(!string.IsNullOrWhiteSpace(sort))   
            switch (sort)
            {
                case "firstname":
                    if(dir=="asc")
                        query=query.OrderBy(d => d.FirstName);
                    if(dir=="des")
                        query=query.OrderByDescending(d => d.FirstName);
                    break;
                case "lastname":
                    if(dir=="asc")
                        query= query.OrderBy(d => d.LastName);
                    if(dir=="des")
                        query=query.OrderByDescending(d => d.LastName);
                    break;
            }
        query = query.Take(pageLength);
        return query.ToList();
    }
    [HttpPost]
    public IActionResult InsertPerson([FromBody] Person newPerson){
        context.Persons.Add(newPerson);
        context.SaveChanges();
        return Created("", newPerson);
    }
    [Route("{id}")]
    [HttpGet]
    public IActionResult GetPerson(int id){
        var person = context.Persons.Find(id);
        if(person==null){
            return NotFound();
        }
        return Ok(person);
    }
    [Route("{id}")]
    [HttpDelete]
    public IActionResult DeletePerson(int id){
        var person = context.Persons.Find(id);
        if(person==null){
            return NotFound();
        }
        context.Persons.Remove(person);
        context.SaveChanges();
        return NoContent();
    }
    [HttpPut]
    public IActionResult UpdatePerson([FromBody] Person updatePerson){
        var person = context.Persons.Find(updatePerson.Id);
        if (person==null){
            return NotFound();
        }
        person.FirstName=updatePerson.FirstName;
        person.LastName = updatePerson.LastName;
        context.SaveChanges();
        return Ok(person);
    }
}