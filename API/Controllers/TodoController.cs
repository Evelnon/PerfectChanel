using Microsoft.AspNetCore.Mvc;
using SPA.Models;
using System;
using System.Collections.Generic;
using static SPA.Models.TodoItem;

namespace SPA.Controllers
{
    [Produces("application/json")]
    [Route("api/{controller}/{action}")]
    public class TodoController : ControllerBase
    {

        //private List<TodoItem> TodoList = new List<TodoItem>();


        [HttpGet]
        public IEnumerable<TodoItem> GetTodoList()
        {

            //TodoList.Add(new TodoItem { description = "test1", status = (int)TodoStatus.Completed, todoId = "0" });
            //TodoList.Add(new TodoItem { description = "test2", status = (int)TodoStatus.Pending, todoId = "1" });
            //TodoList.Add(new TodoItem { description = "test3", status = (int)TodoStatus.Completed, todoId = "2" });

            return new List<TodoItem>();
        }


        [HttpPut]
        public TodoItem UpdateTodoStatus([FromBody]Dictionary<string, string> item)
        {
            return new TodoItem
            {
                todoId = item["todoId"],
                description = item["description"],
                status = (Convert.ToInt32(item["status"]) == (Int32)TodoStatus.Completed) ? TodoStatus.Pending : TodoStatus.Completed
            };
        }

        [HttpPost]
        public TodoItem AddTodo([FromBody] Dictionary<string, string> item)
        {
            return new TodoItem {
                todoId = GenerateID(),
                description = item["description"],
                status = TodoStatus.Pending };
        }

        private string GenerateID()
        {
            return Guid.NewGuid().ToString("N");
        }
    }
}
