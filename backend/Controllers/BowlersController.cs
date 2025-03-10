using backend.Data;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;
[ApiController]
[Route("[controller]")]
public class Bowlers : Controller
{
    private BowlingLeagueContext _context;
    public Bowlers(BowlingLeagueContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetBowlers")]
    public IEnumerable<Bowler> Get()
    {
        var bowlers = _context.Bowlers.ToList();
        return bowlers;
    }
}