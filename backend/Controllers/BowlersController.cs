using backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;
[ApiController]
[Route("[controller]")]
public class BowlersController : Controller
{
    private BowlingLeagueContext _context;
    public BowlersController(BowlingLeagueContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetBowlers")]
    public IEnumerable<Bowler> Get()
    {
        var bowlers = _context.Bowlers.Include(x => x.Team).ToList();
        return bowlers;
    }
}