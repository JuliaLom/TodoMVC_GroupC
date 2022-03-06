using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Support.UI;

namespace SeleniumExample
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = ".";
        private const string todoUrl = "http://htmlpreview.github.io/?https://github.com/JuliaLom/TodoMVC_GroupC/blob/main/index.html";
        private EdgeDriver browser;

        // This is run before each test.
        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            // We want to go to the same URL for all tests.
            browser.Url = todoUrl;
        }
        [TestMethod]
        public void CheckBrowser()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            Assert.AreEqual(todoUrl, browser.Url);
        }
        [TestMethod]
        public void AddTodos()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var todoInput = browser.FindElementByCssSelector("#new-todos");
            todoInput.SendKeys("Dog");
            todoInput.SendKeys(Keys.Enter);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var todoList = browser.FindElementByCssSelector(".todo-value");
            Assert.AreEqual("Dog", todoList.Text);
        }
        [TestMethod]
        public void AddTodosCheck()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var todoInput = browser.FindElementByCssSelector("#new-todos");
            todoInput.SendKeys("Dog");
            todoInput.SendKeys(Keys.Enter);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var todoItemsLeft = browser.FindElementByCssSelector(".options .items-left");
            Assert.AreEqual("1 item left", todoItemsLeft.Text);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var todoItemCheckbox = browser.FindElementByCssSelector(".todo-item .toggle-item");
            todoItemCheckbox.Click();
            Assert.AreEqual("0 items left", todoItemsLeft.Text);

        }
        [TestMethod]
        public void AddMultipleTodos()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var todoInput = browser.FindElementByCssSelector("#new-todos");
            todoInput.SendKeys("Dog");
            todoInput.SendKeys(Keys.Enter);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            todoInput.SendKeys("Cat");
            todoInput.SendKeys(Keys.Enter);
            todoInput.SendKeys("Bird");
            todoInput.SendKeys(Keys.Enter);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var todoItemsLeft = browser.FindElementByCssSelector(".options .items-left");
            var todoItemCheckbox = browser.FindElementByCssSelector(".todo-item:nth-child(2) .toggle-item");
            todoItemCheckbox.Click();
            Assert.AreEqual("2 items left", todoItemsLeft.Text);

        }


        // This is run after each test.
        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            browser.Quit();
        }
    }
}