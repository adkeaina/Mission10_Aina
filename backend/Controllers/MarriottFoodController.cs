using backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class MarriottFoodController : Controller
{
    private FoodDbContext _context;
    public MarriottFoodController(FoodDbContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetMarriottFood")]
    public IEnumerable<MarriottFood> Get()
    {
        var foodList = _context.Foods.ToList();
        return foodList;
    }
}